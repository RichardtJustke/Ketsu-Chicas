import React from 'react';

const Section03 = () => {
  return (
    <section className="bg-alabaster py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-shark">
          O que guia cada projeto
        </h2>
        <p className="text-center text-lg text-dove-gray mt-4">
          Princípios que sustentam nosso trabalho e garantem resultados consistentes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-shark">Excelência</h3>
            <p className="text-dove-gray mt-2">
              Buscamos alto padrão em cada detalhe — do atendimento à execução final.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-shark">Responsabilidade</h3>
            <p className="text-dove-gray mt-2">
              Cumprimos prazos, acordos e expectativas com seriedade e transparência.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-shark">Planejamento</h3>
            <p className="text-dove-gray mt-2">
              Nada é improvisado. Cada evento nasce de uma estratégia clara e bem estruturada.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-shark">Personalização</h3>
            <p className="text-dove-gray mt-2">
              Projetos pensados sob medida, respeitando o perfil, o objetivo e a essência de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;