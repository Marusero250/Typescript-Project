const funcionario = {
    codigo: 10,
    nome: 'João'
};

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

interface Funcionario {
    codigo: number,
    nome: string
}

const funcionario1: Funcionario = {
    codigo: 100,
    nome: 'Pedro'
}