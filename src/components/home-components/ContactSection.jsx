import React from 'react'
import { PrimaryButton } from '../General.styles'
import { ContactFormContainer, ContactSectionContainer, Form } from './ContactSection.styles'
import FormImage from './contact-section/FormImage'

export default function ContactSection() {
  return (
    <ContactSectionContainer>
        <h4>
            No esperes más, <br/>
            conviertete en un <span>experto coctelero</span>
        </h4>
        <p>
            Recibe en tu corre las mejores recetas, trucos, consejos y mucho más
        </p>
        <ContactFormContainer>
            <Form>
                <input type="email" placeholder="Ingresa tu correo electrónico" />
                <p>
                    <input type="checkbox" />
                    <label>Acepto la política de privacidad *</label>
                </p>
                <PrimaryButton>Suscribirme</PrimaryButton>
                <FormImage />
            </Form>
        </ContactFormContainer>
    </ContactSectionContainer>
  )
}
