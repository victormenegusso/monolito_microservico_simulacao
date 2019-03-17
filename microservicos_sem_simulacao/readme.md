# Micro Serviços sem simulação

 - [frontend](frontend)
 - [escrituração backend](escrituracaoBackend)
 - [notas backend](notasBackend)


## criando a rede
Para que os micros serviços se comuniquem é necessário criar uma rede:

```bash
docker network create network_contabilidade_exemplo
```

## Iniciando o front
```bash
cd frontend 
docker-compose up
```

## Iniciando o backend escrituração
```bash
cd escrituracaoBackend 
docker-compose up
```

## Iniciando o backend notas
```bash
cd notasBackend 
docker-compose up
```

## Acessando o sistema
Para acessar o frontend: [http://localhost:7172](http://localhost:7172)