import express from 'express';

import { getAtendentes,getUnidades,getSessoes,getClientes, createAtendente,createUnidade,createSessoes,createClientes, getAtendente,getUnidade,getSessao,getCliente, 
        deleteAtendentes,deleteUnidades,deleteSessoes,deleteClientes,updateAtendente,updateUnidade,updateSessao, updateCliente} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAtendentes);

router.get('/', getUnidades);

router.get('/', getSessoes);

router.get('/', getClientes);

router.post('/', createAtendente);

router.post('/', createUnidade);

router.post('/', createSessoes);

router.post('/', createClientes);

router.get('/:id', getAtendente);

router.get('/:id', getUnidade);

router.get('/:id', getSessao);

router.get('/:id', getCliente);

router.delete('/:id', deleteAtendentes);

router.delete('/:id', deleteUnidades);

router.delete('/:id', deleteSessoes);

router.delete('/:id', deleteClientes);

router.patch('/:id', updateAtendente);

router.patch('/:id', updateUnidade);

router.patch('/:id', updateSessao);

router.patch('/:id', updateCliente);

export default router;