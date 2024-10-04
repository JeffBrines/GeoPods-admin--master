//------------------Nav bar icons----------------------------
import CategoriesIcon from "./navBar/categoriesIcon";
import OverviewIcon from "./navBar/overviewIcon";
import LogOutIcon from "./navBar/logOutIcon";
import VideosIcon from "./navBar/videosIcon";

//------------------Utils icons----------------------------
import MoreIcon from "./utils/moreIcon";
import SmallArrowIcon from "./utils/smallArrowIcon";
import SortIcon from "./utils/sortIcon";
import DeleteIcon from "./utils/deleteIcon";
import CloseIcon from "./utils/CloseIcon";
import EditIcon from "./utils/editIcon";
import Message from "./utils/message";
//-------------------Other icons----------------------------
import logo from "./logo.svg";
import SearchIcon from "./utils/searchIcon";

const ICONS = {
  utils: {
    more: <MoreIcon />,
    smallArrow: <SmallArrowIcon />,
    sortIcon: <SortIcon />,
    delete: <DeleteIcon />,
    edit: <EditIcon />,
    close: <CloseIcon />,
    message: <Message />,
    search: <SearchIcon />,
  },
  navBar: {
    categories: <CategoriesIcon />,
    overview: <OverviewIcon />,
    videos: <VideosIcon />,
    logOut: <LogOutIcon />,
  },
  logo,
};

export default ICONS;
