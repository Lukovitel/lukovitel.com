import { useEffect, useId, useRef, useState } from 'react'
import {
  mailHref,
  salesEmail,
  teamsUrl,
  telegramUrl,
  whatsappUrl,
  type Copy,
} from './copy.ts'

type ContactFabProps = {
  copy: Copy
}

export function ContactFab({ copy }: ContactFabProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelId = useId()
  const email = mailHref(copy.mailSubject)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <div className={open ? 'fab fab-open' : 'fab'} ref={rootRef}>
      <div className="fab-options" id={panelId} hidden={!open}>
        <a
          className="fab-option fab-option-telegram"
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SendIcon />
          Telegram
        </a>
        <a
          className="fab-option fab-option-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhoneIcon />
          WhatsApp
        </a>
        <a
          className="fab-option fab-option-teams"
          href={teamsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChatIcon />
          Teams
        </a>
        <a className="fab-option fab-option-email" href={email}>
          <MailIcon />
          {salesEmail}
        </a>
      </div>
      <button
        className="fab-btn"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? copy.contactClose : copy.contactOpen}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="fab-pulse" aria-hidden="true" />
        {open ? <CloseIcon /> : <BubbleIcon />}
      </button>
    </div>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 21.7a.5.5 0 0 0 .9 0l6.5-19a.5.5 0 0 0-.6-.6l-19 6.5a.5.5 0 0 0 0 .9l7.9 3.2a2 2 0 0 1 1.1 1.1z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="m21.9 2.1-10.9 10.9"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.8 16.6a1 1 0 0 0 1.2-.3l.4-.5A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.5.4a1 1 0 0 0-.3 1.2 14 14 0 0 0 6.4 6.4z"
      />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 17a2 2 0 0 1-2 2H6.8a2 2 0 0 0-1.4.6L3.2 21.8A.7.7 0 0 1 2 21.3V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7"
      />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function BubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.3a2 2 0 0 1 .1 1.2l-1 3.3a1 1 0 0 0 1.2 1.2l3.4-1a2 2 0 0 1 1.1.1A10 10 0 1 0 3 16.3z"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M6 6l12 12M18 6 6 18"
      />
    </svg>
  )
}
