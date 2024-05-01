import React from 'react'
import { Link } from 'react-router-dom'
import notFound from './notfound.svg'

// Компонент для отображения страницы "404 Not Found"
const NotFound = () => {
  
  // Отображение компонента
  return (
    <div>
      <div className='notFound'>
        {/* Изображение для страницы "404 Not Found" */}
        <img className='imgNotFound' src={notFound} alt="not found" />

        {/* Заголовок сообщения */}
        <h2>Page Not Found</h2>

        {/* Ссылка для перехода на главную страницу */}
        <Link to='/' className='backToHome'>Back To Home</Link>
      </div>
    </div>
  )
}

export default NotFound;
