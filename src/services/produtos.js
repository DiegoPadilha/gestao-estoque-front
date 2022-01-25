import { http } from './config'

export default	{

	salvar:(produto)=>{
		return http.post('',produto);
  },
    
	atualizar:(produto)=>{
		return http.put(''+produto.id,produto);
  },

  	listar:()=>{
		return http.get('')
  },

  	apagar:(produto)=>{
		return http.delete(''+produto.id, { data: produto })
  }
}