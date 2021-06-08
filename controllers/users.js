import { v4 as uuid } from 'uuid';
let Atendentes = [];
let Unidades = [];
let Sessoes = [];
let Clientes = [];


export const getAtendentes = (req, res) => {
    console.log(`Atendente no banco de dados: ${Atendentes}`);

    res.send(Atendentes);
}

export const getUnidades = (req, res) => {
    console.log(`Unidade no banco de dados: ${Unidades}`);

    res.send(Unidades);
}

export const getSessoes = (req, res) => {
    console.log(`Sessao no banco de dados: ${Sessoes}`);

    res.send(Sessoes);
}

export const getClientes = (req, res) => {
    console.log(`Clientes no banco de dados: ${Clientes}`);

    res.send(Clientes);
}

export const createAtendente = (req, res) => {   
    const user = req.body;

    Atendentes.push({...user, id: uuid()});
    
    console.log(`Atendente [${user.NomeAtendente}, [${user.horario}, [${user.NomeCliente}]adicionado no banco de dados.`);
};

export const createUnidade = (req, res) => {   
    const user = req.body;

    Unidades.push({...user, id: uuid()});
    
    console.log(`Unidade [${user.Endereco}] adicionado no banco de dados.`);
};

export const createSessoes = (req, res) => {   
    const user = req.body;

    Sessoes.push({...user, id: uuid()});
    
    console.log(`Atendente [${user.Nome}], [${user.Horario}], [${user.NomeCliente}] adicionado no banco de dados.`);
};

export const createClientes = (req, res) => {   
    const user = req.body;

    Clientes.push({...user, id: uuid()});
    
    console.log(`Cliente [${user.Nome}], [${user.Sobrenome}] [${user.CPF}] adicionado no banco de dados.`);
};

export const getAtendente = (req, res) => {
    res.send(req.params.id)
};

export const getUnidade = (req, res) => {
    res.send(req.params.id)
};

export const getSessao = (req, res) => {
    res.send(req.params.id)
};

export const getCliente = (req, res) => {
    res.send(req.params.id)
};

export const deleteAtendentes = (req, res) => { 
    console.log(`Atendente com o id ${req.params.id}foi deletado com sucesso `);
    
    Atendentes = Atendentes.filter((user) => user.id !== req.params.id);
};

export const deleteUnidades = (req, res) => { 
    console.log(`Unidades com o id ${req.params.id}foi deletado com sucesso `);
    
    Unidades = Unidades.filter((user) => user.id !== req.params.id);
};

export const deleteSessoes = (req, res) => { 
    console.log(`Sessão com o id ${req.params.id}foi deletado com sucesso `);
    
    Sessoes = Sessoes.filter((user) => user.id !== req.params.id);
};

export const deleteClientes = (req, res) => { 
    console.log(`Cliente com o id ${req.params.id}foi deletado com sucesso `);
    
    Clientes = Clientes.filter((user) => user.id !== req.params.id);
};

export const updateAtendente =  (req,res) => {
    const user = Atendentes.find((user) => user.id === req.params.id);
    
    user.NomeAtendente = req.body.NomeAtendente;
    user.horario = req.body.horario;
    user.NomeCliente = req.body.NomeCliente;

    console.log(`Atendente foi atualizado para ${req.body.username}. com o horario ${req.body.horario} com o ${req.body.NomeCliente}`)
};

export const updateUnidade =  (req,res) => {
    const user = Unidade.find((user) => user.id === req.params.id);
    
    user.Endereco = req.body.Endereco;

    console.log(`O local da Unidade foi atualizado para ${req.body.Endereco}`)
};

export const updateSessao =  (req,res) => {
    const user = Sessao.find((user) => user.id === req.params.id);
    
    user.NomeAtendente = req.body.NomeAtendente;
    user.horario = req.body.horario;
    user.NomeCliente = req.body.NomeCliente;

    console.log(`Sessao do atendente ${req.body.NomeAtendente} foi atualizada para ${req.body.horario}. com o cliente ${req.body.NomeCliente}`)
};

export const updateCliente =  (req,res) => {
    const user = Cliente.find((user) => user.id === req.params.id);
    
    user.NomeCliente = req.body.NomeCliente;
    user.CPF = req.body.CPF;

    console.log(`O nome do cliente foi atualizado para ${req.body.NomeCliente}.juntamente com o seu CPF ${req.body.CPF}`)
};
