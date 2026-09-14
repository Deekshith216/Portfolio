// Contact form submission — isolated from the UI so the backend can be swapped easily.
// Currently wired to Web3Forms (https://web3forms.com). Set VITE_WEB3FORM in .env to
// your own access key, or replace `submitContactForm` with a different provider/endpoint.

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORM

  if (!accessKey) {
    return { ok: false, error: 'Contact form is not configured yet — set VITE_WEB3FORM in .env.' }
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New portfolio message from ${payload.name}`,
        from_name: payload.name,
        ...payload,
      }),
    })
    const result = await res.json()
    if (result.success) return { ok: true }
    return { ok: false, error: result.message || 'Submission failed.' }
  } catch (err) {
    console.error('Contact form submission error:', err)
    return { ok: false, error: 'Network error — please try again or email directly.' }
  }
}
