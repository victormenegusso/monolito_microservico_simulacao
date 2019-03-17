# Micro Serviços sem simulação

 - [frontend](frontend)
 - [escrituração backend](escrituracaoBackend)

Agora o serviço de notas é simulado, utilizando mockserver, o mesmo vai subir junto com o serviço de escrituração.

No diretório `escrituracaoBackend/notasmock` temos dois arquivos:
 - exp.json -> Configurações dos requests 'Expectations' para o servidor mockado
 - mockserver.properties -> Configurações 'Settings Properties' do servidor mockado, como o uso de CORS



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

## Acessando o sistema
Para acessar o frontend: [http://localhost:7272](http://localhost:7272)