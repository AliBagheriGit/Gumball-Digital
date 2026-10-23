'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interestedIn: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate submission network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        interestedIn: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-form">
      {status === 'success' ? (
        <div className="success-message w-form-done" style={{ display: 'block' }}>
          <div className="text-block-3">{t.contact.successMsg}</div>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="btn btn-secondary btn-small"
            style={{ marginTop: '16px' }}
          >
            {t.langName === 'فارسی' ? 'ارسال پیام جدید' : 'Send another inquiry'}
          </button>
        </div>
      ) : (
        <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" onSubmit={handleSubmit}>
          <div id="Field-Container" className="control-holder">
            <label htmlFor="name">{t.contact.nameLabel}</label>
            <input
              className="input-basic w-input"
              maxLength={256}
              name="name"
              placeholder={t.contact.namePlaceholder}
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="control-holder">
            <label htmlFor="email">{t.contact.emailLabel}</label>
            <input
              className="input-basic w-input"
              maxLength={256}
              name="email"
              placeholder={t.contact.emailPlaceholder}
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="control-holder">
            <label htmlFor="Company">{t.contact.companyLabel}</label>
            <input
              className="input-basic w-input"
              maxLength={256}
              name="company"
              placeholder={t.contact.companyPlaceholder}
              type="text"
              id="Company"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="control-holder">
            <label htmlFor="Role">{t.contact.roleLabel}</label>
            <input
              className="input-basic w-input"
              maxLength={256}
              name="role"
              placeholder={t.contact.rolePlaceholder}
              type="text"
              id="Role"
              required
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div className="control-holder">
            <label htmlFor="Interested-In">{t.contact.interestedLabel}</label>
            <select
              id="Interested-In"
              name="interestedIn"
              required
              className="input-basic-select w-select"
              value={formData.interestedIn}
              onChange={handleChange}
            >
              <option value="">{t.contact.interestedSelect}</option>
              <option value="Advertising">{t.contact.optionAdvertising}</option>
              <option value="Publisher">{t.contact.optionPublisher}</option>
              <option value="Other">{t.contact.optionOther}</option>
            </select>
          </div>

          <div className="control-holder">
            <label htmlFor="Message">{t.contact.messageLabel}</label>
            <textarea
              id="Message"
              name="message"
              maxLength={5000}
              placeholder={t.contact.messagePlaceholder}
              required
              className="input-basic input-basic-textarea w-input"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="button-holder">
            <input
              type="submit"
              disabled={status === 'submitting'}
              className="btn w-button"
              value={status === 'submitting' ? t.contact.submitting : t.contact.submitBtn}
            />
          </div>

          {status === 'error' && (
            <div className="w-form-fail" style={{ display: 'block', marginTop: '16px' }}>
              <div>{t.contact.errorMsg}</div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

