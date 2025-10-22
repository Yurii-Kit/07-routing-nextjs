'use client';

import Modal from './Modal';
import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface ModalClientProps {
  children: React.ReactNode;
}

export default function ModalClient({ children }: ModalClientProps) {
  const router = useRouter();

  const handleClose = () => router.back(); // Закриває модалку

  return (
    <Modal onClose={handleClose}>
      <button className={css.modalBtn} onClick={handleClose}>
        Close
      </button>
      {children}
    </Modal>
  );
}
