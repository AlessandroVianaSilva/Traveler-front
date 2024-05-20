import React from 'react'

const FormUser = () => {
  return (
    <div>
      <div>
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder='Seu nome' />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <div>
                    <div>

                    </div>
                    <input type="text" placeholder='email' />
                </div>
            </div>

            <div>
                <label htmlFor="description">Descrição</label>
                <textarea name="" id="" cols={30} rows={6} placeholder='Alguma coisa sobre vc'></textarea>
            </div>

        </form>
      </div>
    </div>
  )
}

export default FormUser
