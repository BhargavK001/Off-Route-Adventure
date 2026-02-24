# How to Change the Default Email

To update the default email address for the application (both for display and for receiving contact form submissions), follow these steps:

### 1. Update Display Email
Change the email in the global constants file to update where it appears on the website (Contact page, Footer, etc.).

- **File:** `src/lib/constants.ts`
- **Constant:** `COMPANY_INFO.email`

```typescript
export const COMPANY_INFO = {
  // ...
  email: "new.email@example.com",
  // ...
};
```

### 2. Update Form Recipient & Sender
The backend API sends two emails: one to you (the Admin) and a "Thank You" email to the customer.

- **File:** `src/app/api/contact/route.ts`
- **Admin Email (Recipient):** Change `TO_EMAIL` constant.
- **Sender Email:** Both emails are sent from `Off Route Adventure <noreply@offrouteadventure.in>`.

```typescript
const TO_EMAIL = "your.admin.email@example.com";
const FROM_EMAIL = "Off Route Adventure <noreply@yourdomain.com>";
```

> [!IMPORTANT]
> To use a custom domain like `noreply@offrouteadventure.in`, you **must** verify the domain `offrouteadventure.in` in your Resend Dashboard settings. Otherwise, the emails will fail to send.

### 3. Customize Email Templates
You can find the HTML templates for both the Admin notification and the Customer "Thank You" message in `src/app/api/contact/route.ts`.

### 4. Resend Configuration
- Ensure `RESEND_API_KEY` in `.env.local` is set correctly.
