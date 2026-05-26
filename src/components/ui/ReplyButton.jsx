/**
 * ReplyButton
 *
 * Componente UI reutilizable para mostrar la acción “Reply”.
 * No maneja eventos; solo renderiza icono y texto.
 *
 * @returns {import('react').JSX.Element}
 * @example
 * <ReplyButton/>
 */
const ReplyButton = ({ classes }) => (
  <div className={`flex items-center gap-1 cursor-pointer ${classes}`}>
    <img src="images/icon-reply.svg" alt="Reply" />
    <span className="text-purple-600 text-sm">Reply</span>
  </div>
)

export default ReplyButton
