

import React from 'react'
import './Inicio.css'
import { TbBeach } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Inicio = () => {

    const resorts = [
        {id: 1, img: 'https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {id: 2, img: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {id: 3, img: 'https://img.freepik.com/fotos-gratis/piscina_74190-2104.jpg?t=st=1724783946~exp=1724787546~hmac=f7ebbed43c904d1cde48e4094bbd6556bc05935fbafe3ff75f600dc8649eb6e0&w=1380'},
        {id: 4, img: 'https://images.pexels.com/photos/1488515/pexels-photo-1488515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {id: 5, img: 'https://img.freepik.com/fotos-gratis/tipo-complexo-de-entretenimento-o-popular-resort-com-piscinas-e-parques-aquaticos-na-turquia-com-mais-de-5-milhoes-de-visitantes-por-ano-hotel-de-luxo-amara-dolce-vita-recorrer-tekirova-kemer_146671-18728.jpg?t=st=1724783989~exp=1724787589~hmac=f8e05eff32c14b4ce0551967838b56b1b6769f3755793faf6d5678e86e26652f&w=1380'},
        {id: 6, img: 'https://img.freepik.com/fotos-gratis/sky-palm-lazer-paraiso-de-viagens_1203-4503.jpg?uid=R145372004&ga=GA1.1.1549449650.1701212212&semt=ais_hybrid'},
        {id: 7, img: 'https://img.freepik.com/fotos-gratis/bela-praia-tropical-e-mar-com-guarda-chuva-e-cadeira-ao-redor-da-piscina_74190-1071.jpg?t=st=1724784063~exp=1724787663~hmac=af3a43f8409dc89ea1426b93f47eb56a82b189f052185845c5833f2679dadb35&w=1380'},
        {id: 8, img: 'https://img.freepik.com/fotos-gratis/piscina_74190-2110.jpg?t=st=1724784109~exp=1724787709~hmac=b8b9f2b27ff296b0c6775ce49b268db8b3adc650cf2add30df498154f752c8f1&w=1380'}
    ];


  return (
    <div>

        <header >
            <nav className='navegacao'>
                <ul>
                    <div className="iconeConfiguracao">
                        <TbBeach className='icone'/>
                    </div>
                    <li>Login</li>
                    <li>Contato</li>
                    <li>Sobre Nós</li>
                </ul>
            </nav>
        </header>


        <section >
            <div className='background'>
                <h1 className='titulo'>Resort Contact</h1>
                <h2 className='title'>Onde você quer ir?</h2>
                <p className='p1'>Escolha o estado e a cidade para achar os melhores resorts.</p>

                <form className='formulario'>
                    <select>
                        <option value="">Escolha o Estado</option>
                        <option value="">Bahia</option>
                        <option value="">Rio de Janeiro</option>
                        <option value="">Santa Catarina</option>
                    </select>
                </form>
                <button className='btn1'>Pesquisar Resorts</button>
            </div>
        </section>

        <main>
            <section className='fundo'>
                <h2>Conheça mais Resorts</h2>
                <div className="imgConfiguracoes">
                    {resorts.map((resort) => (
                        <img className='imgResorts' key={resort.id} src={resort.img} alt="Resort" />
                    ))}
                </div>
            </section>
        </main>

        <footer className='rodaPe'>
            <h2 className='titleFooter'>Resort Contact</h2>
            <p className='p2'>Resort Concat é um site dedicado à reserva de resorts, oferecendo aos usuários uma experiência simples e eficiente para encontrar o destino perfeito. Com uma interface intuitiva, permite pesquisar, comparar e reservar acomodações de forma rápida e segura.</p>
            <div className="redesSociais">
                <FaInstagram className='icones'/>
                <FaFacebook className='icones'/>
                <FaLinkedin className='icones'/>
            </div>
        </footer>

    </div>
  )
}

export default Inicio
