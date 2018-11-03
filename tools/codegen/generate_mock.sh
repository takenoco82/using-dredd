PROJECT_ROOT=`pwd | xargs dirname | xargs dirname`

docker run --rm \
    -v ${PROJECT_ROOT}/mock:/tmp \
    --net using-dredd_my_networks \
    swaggerapi/swagger-codegen-cli \
    generate -l nodejs-server -i http://swagger-ui:8080/swagger.yaml -o /tmp
