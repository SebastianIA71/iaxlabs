'use server';

import { siteConfig } from '@/config/site';
import resend from '@/lib/resend';
import * as React from 'react';

interface SendEmailProps {
  email: string;
  subject: string;
  react: React.ComponentType<any> | React.ReactElement;
  reactProps?: Record<string, any>;
}

export async function sendEmail({
  email,
  subject,
  react,
  reactProps,
}: SendEmailProps) {
  try {
    if (!email) {
      console.error('Email is required');
      return { success: false, error: 'Email is required' };
    }

    if (!resend) {
      console.error('Resend API key is not set');
      return { success: false, error: 'Resend is not configured' };
    }

    const from = `${siteConfig.name} <${process.env.ADMIN_EMAIL}>`;

    // Handle React template: support component type or rendered element
    const emailContent = reactProps
      ? React.createElement(react as React.ComponentType<any>, reactProps)
      : (react as React.ReactElement);

    await resend.emails.send({
      from,
      to: email,
      subject,
      react: emailContent,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}


