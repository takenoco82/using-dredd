import dredd_hooks as hooks
from enum import Enum
import json


@hooks.before_all
def my_before_all_hook(transactions):
    """called at the beginning of the whole test run."""
    print("before_all")


@hooks.before_each
def my_before_each_hook(transaction):
    """called before each HTTP transaction."""
    pass


@hooks.before
def my_before_hook(transaction):
    """called before some specific HTTP transaction."""
    pass


@hooks.before_each_validation
def my_before_each_validation_hook(transaction):
    """called before each HTTP transaction is validated."""
    pass


@hooks.before_validation
def my_before_validation_hook(transaction):
    """called before specific HTTP transaction is validated."""
    pass


@hooks.after
def my_after_hook(transaction):
    """called after some specific HTTP transaction regardless its result."""
    pass


@hooks.after_each
def my_after_each(transaction):
    """called after each HTTP transaction."""
    pass


@hooks.after_all
def my_after_all_hook(transactions):
    """called after whole test run."""
    pass


class Operation(Enum):
    createUser = "users > /v1/users > Create a new user. > 201 > application/json"
    getUsers = "users > /v1/users > Lists users. > 200 > application/json"
    getUser = "users > /v1/users/{user_id} > Get the user. > 200 > application/json"
    updateUser = "users > /v1/users/{user_id} > Update the user. > 200 > application/json"
    deleteUser = "users > /v1/users/{user_id} > Delete the user. > 204 > application/json"


# 特定のAPIのみスキップする
@hooks.before(Operation.getUser.value)
def skip_get_user(transaction):
    transaction['skip'] = True


response_stash = {}


# ワークフロー（POSTで登録したデータのidを使ってPUTで更新）
@hooks.after(Operation.createUser.value)
def create_user(transaction):
    print(transaction.keys())
    response = transaction['real'].get('body')
    response_stash[Operation.createUser.value] = response


@hooks.before(Operation.updateUser.value)
def update_user(transaction):
    created_user = json.loads(response_stash[Operation.createUser.value])
    user_id = created_user['user_id']
    # /v1/users/42 → /v1/users/{POSTで登録した際のuser_id}
    # NOTE: エンドポイントを直接置換するのでswagger.yamlにてx-exampleで指定した値と合わせる必要がある
    # NOTE: dreddを実行した際には置換前のURLが表示されるので注意！
    transaction['fullPath'] = transaction['fullPath'].replace('42', str(user_id))
