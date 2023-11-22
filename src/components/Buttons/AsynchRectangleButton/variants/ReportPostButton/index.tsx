import React, { useContext } from "react";
import { ReportPostButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import usePostReports from "./hooks/usePostReports";
import AsynchRectangleButton from "../..";
import ReportIcon from "../../../../icons/ReportIcon";
import { firebaseReportPost } from "../../../../../services/firebase/functions/data/create/firebaseReportPost";

const ReportPostButton: React.FC<ReportPostButtonProps> = ({ postId }) => {
  const { userId } = useContext(UserModelContext)

  const { isReported } = usePostReports(postId, userId);

  return (
    <AsynchRectangleButton
      icon={<ReportIcon />}
      onClick={async () => await firebaseReportPost(postId, userId)}
      bg="orange"
      successTitle={isReported ? 'Has eliminado el reporte' : 'Publicación reportada'}
      successDescription={isReported ? 'Has eliminado el reporte de esta publicación. Gracias por tu contribución.' : 'Has reportado esta publicación. Gracias por tu contribución.'}
      errorTitle="Error al reportar la publicación"
      errorDescription="No se pudo reportar la publicación. Por favor, inténtalo de nuevo."
    >
      {isReported ? 'Eliminar reporte' : 'Reportar publicación'}
    </AsynchRectangleButton>
  );
};

export default ReportPostButton;
