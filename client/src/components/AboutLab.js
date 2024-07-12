import React from 'react'
import { Container } from 'react-bootstrap'

export default function AboutLab() {
  return (
    <Container className='bg-black text-white pb-2 rounded shadow'>
        <header className="mb-6">
        <h1 className="text-4xl font-bold text-center font-roboto text-blue-500">
          University of California, Irvine
        </h1>
        <h1 className="text-4xl font-bold text-center font-roboto border-4 border-blue-500 p-2 mt-2">
          WANG RESEARCH GROUP
        </h1>
        <h2 className="text-2xl font-semibold text-center mt-2 font-roboto">
          Lab Advisor: Dr. Xizheng Wang
        </h2>
        <p className="text-center font-roboto mt-1">
          Assistant Professor,
          <a href="https://engineering.uci.edu/dept/mae" className="text-blue-600">
            {" "}
            Mechanical and Aerospace Engineering
          </a>
          <br />
          Location: Office 3221 Engineering Gateway, Lab 2105 Engineering Gateway
        </p>
      </header>

      <section className="mb-6">
        <h3 className="text-xl font-semibold font-roboto">Lab Details</h3>
        <p className="font-roboto">
          Our research interests range across various areas of{" "}
          <strong>Sustainable Manufacturing</strong>, including sustainable
          electrified ultrahigh-temperature (up to 3000 K) synthesis and
          manufacturing of functional nano/bulk materials, ultrahigh-temperature
          additive manufacturing, as well as wood nanotechnology. Our goal is to
          design and synthesize novel functional materials for applications in
          energy, catalysis, and sustainability, and to achieve a fundamental
          understanding of the high-temperature process using in-situ and
          in-operando characterizations.
        </p>
      </section>
    </Container>
  )
}
