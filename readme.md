# Do Monolito para Micro Serviços com Simulação

**_( Construção...... )_**

## Objetivos

- Mostrar as vantagens e desvantagens de simular micro serviços
- Mostrar uma forma de simular micro serviços

## Contexto 

Será utilizado como exemplo, um sistema monolítico de Contabilidade que possui dois contextos:

- notas
- escrituração

Na parte de notas, basicamente existe um crud para cadastro das notas do cliente. Apresentando uma API e uma Service.

Na parte de escrituração temos um processo de escrituração de notas e listagem dos lançamentos contábeis,
**Processo de escrituração de notas**
> Para cada nota são criados 1 ou mais lançamentos contábeis

### Exercício
A ideia é imaginar que somos do time de escrituração e esse monolito vai ser transformado em micro serviços.

- Como vamos executar o nosso serviço?
- Como vamos testar o nosso serviço?


## Fases

### Monolito

**Arquitetura do sistema**

![Alt text](./monolito.svg)

- O Front obtém os dados via API
- O Service de escrituração tem acesso direto ao Service de Notas

**Vantagens:**
- fácil de executar.
- fácil de criar testes, especialmente os que envolvem dois contextos diferentes ( _escrituração de notas_ ).

### Micro Serviço ( sem simulador )

**Arquitetura do sistema**

![Alt text](./micro_servicos_sem_simulador.svg)

**Vantagens:**

- As várias relacionadas a utilizar micro serviços...

**Desvantagens**

- Executar um fluxo que envolve mais de um contexto ( _temos que subir N serviços na máquina ou manter ambientes de teste_ ), isso pode consumir muito recurso de máquina.

- O serviço de notas pode se tornar complexo e passar a ter outros serviços como dependência.

![Alt text](./micro_servicos_sem_simulador_evolucao.svg)

- Se criarmos outro serviço que deve ser escriturado, por exemplo impostos, mais um serviço a ser levantado para testar/executar a escrituração.

### Micro Serviço ( com o simulador )

**Vantagens:**

- Menos recurso de máquina utilizado.
- Desenvolvedores da escrituração não precisam conhecer a fundo a arquitetura dos demais serviços.

**Desvantagens:**

- Configurar todos os endpoints / resultados para todos serviços dependentes.

## Fontes

https://medium.com/@copyconstruct/testing-microservices-the-sane-way-9bb31d158c16

http://www.mock-server.com/
