import { ReactNode } from "react";

export default function Testimonies({
  child,
  dialog,
}: {
  child: ReactNode;
  dialog: React.RefObject<HTMLDialogElement | null>;
}) {
  return (
    <>
      <dialog ref={dialog} popover="auto">
        {child}
      </dialog>

      {/*=============================*/}
      {/*  */}
      {/*=============================*/}
      <style jsx>{`
        dialog {
          top: 50%;
          left: 50%;
          width: 80%;
          max-width: 680px;
          position: relative;
          border-radius: 14px;
          box-shadow: var(--shadow-5);
          border: 1px solid var(--jet);
          background: var(--eerie-black-2);
          transform: translate(-50%, -50%) scale(1);

          &[open] {
            animation: fade-in 0.25s ease-out;

            &::backdrop {
              visibility: visible;
              pointer-events: all;
              background: hsla(0, 0%, 5%, 0.8);
            }
          }

          &::backdrop {
            visibility: hidden;
            pointer-events: none;
            background: hsla(0, 0%, 5%, 0.5);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }

          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}
