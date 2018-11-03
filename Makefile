.PHONY: dredd
dredd:
	dredd

.PHONY: run
run: stop
	docker-compose up -d --build --remove-orphans

.PHONY: stop
stop:
	docker-compose stop
	docker-compose rm

.PHONY: codegen
codegen:
	cd ./tools/codegen && ./generate_mock.sh

.PHONY: clean
clean:
	docker-compose config --services | xargs docker rm -f
