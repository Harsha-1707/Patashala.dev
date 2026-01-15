import { Request, Response } from 'express';
import { Logger } from '../utils/logger.js';

interface ContactRequest {
  name: string;
  email: string;
  requirement: string;
  message: string;
}

export class ContactController {
  static async submitContact(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, requirement, message } = req.body as ContactRequest;

      // Basic validation
      if (!name || !email || !requirement || !message) {
        res.status(400).json({ 
          success: false, 
          error: 'All fields are required' 
        });
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ 
          success: false, 
          error: 'Invalid email address' 
        });
        return;
      }

      // Log the contact submission
      Logger.info('📧 Contact form submission received:');
      Logger.info(`   Name: ${name}`);
      Logger.info(`   Email: ${email}`);
      Logger.info(`   Requirement: ${requirement}`);
      Logger.info(`   Message: ${message.substring(0, 50)}...`);

      // In production, you would:
      // 1. Send email notification
      // 2. Save to database
      // 3. Trigger CRM integration

      res.json({ 
        success: true, 
        message: 'Thank you for reaching out! We will get back to you within 24 hours.' 
      });
    } catch (error) {
      Logger.error('Error processing contact form:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to process your request. Please try again later.' 
      });
    }
  }
}
