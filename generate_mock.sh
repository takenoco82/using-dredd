docker run --rm \
    -v $PWD/mock:/tmp \
    --net using-dredd_my_networks \
    swaggerapi/swagger-codegen-cli \
    generate -l nodejs-server -i http://swagger-ui:8080/swagger.yaml -o /tmp
