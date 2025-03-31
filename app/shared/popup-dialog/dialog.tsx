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
      <dialog ref={dialog} popover="auto" className="dialog">
        {child}
      </dialog>

      {/*=============================*/}
      {/*  */}
      {/*=============================*/}
      <style jsx>{`
        .dialog {
          top: 50%;
          left: 50%;
          z-index: 2;
          position: relative;
          border-radius: 14px;
          transform: scale(5.2);
          box-shadow: var(--shadow-5);
          border: 1px solid var(--jet);
          transition: var(--transition-1);
          background: var(--eerie-black-2);
          transform: translate(-50%, -50%);
        }

        :global(.dialog::backdrop) {
          opacity: 0.8;
          visibility: visible;
          pointer-events: none;
          background: hsl(0, 0%, 5%);
          transition: var(--transition-1); /*does not work*/
        }
      `}</style>
    </>
  );
}
