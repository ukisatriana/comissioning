import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded/FusePageCarded';
import FormTambahProject from '@fuse/core/FormTambahProject';
import TableProject from '@fuse/core/TableProject/TableProject';
import { Button } from '@mui/base';
import ProjectHeader from './ProjectHeader';


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function DataProjectPage(props) {
  const { t } = useTranslation('dataprojectPage');

  return (
    <FusePageCarded
      header={ 
      <ProjectHeader />
    }
      content={
        <div className="p-24 flex flex-1 justify-center max-w-full">
         <TableProject/>
         {/* <FormTambahProject /> */}
        </div>
      }
      scroll="content"
    />
  );
}

export default DataProjectPage;
