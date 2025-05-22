import { SectionProps } from '../types';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = ({ id }: SectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error || 'Erreur serveur');
    }

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000);
  } catch (err: any) {
    setSubmitError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id={id} className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nous Contacter</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="bg-white p-8 rounded-lg shadow-custom h-full">
              <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Téléphone</h4>
                    <p className="text-gray-600">+225 07 48 01 11 11 / +225 07 08 23 50 16</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-gray-600">admin@tripleamultiservices.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Adresse</h4>
                    <p className="text-gray-600">Triple A Multiservices</p>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Contactez-nous rapidement</h4>
                <a 
                  href="https://wa.me/447763029704" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp animate-pulse-slow"
                >
                  <MessageSquare size={20} />
                  Me contacter par WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 animate-fade-in">
                  <p className="font-medium">Message envoyé avec succès !</p>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : null}
              
              {submitError ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">Erreur !</p>
                  <p>{submitError}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="votre@gmail.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;