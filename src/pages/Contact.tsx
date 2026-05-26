import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, AlertCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { FAQAccordion } from '../components/FAQAccordion';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.eventType) e.eventType = 'Please select an event type';
    if (!form.message.trim()) e.message = 'Please tell us about your event';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setFormState('loading');
    try {
      // Replace with your actual EmailJS keys
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );
      setFormState('success');
      setForm({ name: '', phone: '', email: '', eventType: '', eventDate: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-stone-200'} bg-white px-4 py-3 font-body text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors`;

  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-100 pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs text-stone-400 mb-6">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>Contact</span>
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 leading-tight mb-4">
            Let's Create Something<br />Beautiful Together
          </h1>
          <p className="font-body text-stone-500 text-lg max-w-xl">
            Tell us about your event — we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-section-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form — 3/5 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-8">Send Us a Message</h2>

              {formState === 'success' ? (
                <div className="flex flex-col items-start gap-4 p-8 bg-stone-50 border border-gold-400">
                  <CheckCircle className="text-gold-500" size={32} />
                  <div>
                    <h3 className="font-display text-2xl font-medium text-stone-900 mb-2">Thank you!</h3>
                    <p className="font-body text-stone-600 leading-relaxed">
                      We've received your message and will be in touch within 24 hours. We look forward to being part of your celebration.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="font-body text-sm text-gold-500 hover:text-gold-600 transition-colors mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs font-medium text-stone-700 mb-1.5 tracking-wide uppercase">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="font-body text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-xs font-medium text-stone-700 mb-1.5 tracking-wide uppercase">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="font-body text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-medium text-stone-700 mb-1.5 tracking-wide uppercase">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="font-body text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs font-medium text-stone-700 mb-1.5 tracking-wide uppercase">Event Type *</label>
                      <select
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className={`${inputClass('eventType')} cursor-pointer`}
                      >
                        <option value="">Select event type</option>
                        <option>Wedding</option>
                        <option>Engagement</option>
                        <option>Thottil Ceremony</option>
                        <option>Manjal Neerattu Vizha</option>
                        <option>Birthday</option>
                        <option>Special Event</option>
                        <option>Other</option>
                      </select>
                      {errors.eventType && <p className="font-body text-red-500 text-xs mt-1">{errors.eventType}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-xs font-medium text-stone-700 mb-1.5 tracking-wide uppercase">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={form.eventDate}
                        onChange={handleChange}
                        className={inputClass('eventDate')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-medium text-stone-700 mb-1.5 tracking-wide uppercase">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your event, venue, and anything else we should know..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="font-body text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 font-body text-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or contact us on WhatsApp.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full bg-stone-900 text-white py-3.5 font-body font-medium text-sm hover:bg-stone-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info — 2/5 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-8">Get In Touch Directly</h2>

              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20AS%20Mani%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-3.5 font-body font-medium text-sm flex items-center justify-center gap-2.5 hover:bg-[#1ebe5d] transition-colors mb-6"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-stone-200" />
                <span className="font-body text-xs text-stone-400">or</span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4">
                  <Phone size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs tracking-wide uppercase text-stone-400 mb-0.5">Phone</p>
                    <p className="font-body text-stone-800 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs tracking-wide uppercase text-stone-400 mb-0.5">Email</p>
                    <a href="mailto:hello@asmanistudio.com" className="font-body text-stone-800 text-sm hover:text-gold-500 transition-colors">
                      hello@asmanistudio.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs tracking-wide uppercase text-stone-400 mb-0.5">Location</p>
                    <p className="font-body text-stone-800 text-sm">Coimbatore, Tamil Nadu</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-xs tracking-wide uppercase text-stone-400 mb-0.5">Hours</p>
                    <p className="font-body text-stone-800 text-sm">Mon – Sat, 9am – 7pm</p>
                  </div>
                </li>
              </ul>

              {/* Map */}
              <div className="overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125274.69455437265!2d76.8956!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AS Mani Studio Location"
                />
              </div>

              {/* Social */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-stone-400 hover:text-gold-500 transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-stone-400 hover:text-gold-500 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-stone-400 hover:text-gold-500 transition-colors"><Youtube size={18} /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
