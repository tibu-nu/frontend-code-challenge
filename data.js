const { v4: uuid } = require("uuid");
const starredId = uuid();
const channelsId = uuid();
const directMessagesId = uuid();

const menuItems = [
  {
    id: starredId,
    label: "Starred",
    order: 1,
    icon: "HiOutlineStar",
  },
  {
    id: channelsId,
    label: "Channels",
    order: 2,
    icon: "HiOutlineHashtag",
  },
  {
    id: directMessagesId,
    label: "Direct Messages",
    order: 3,
    icon: "HiOutlineChat",
  },
  {
    id: uuid(),
    label: "General",
    parentId: channelsId,
    icon: "HiOutlineGlobe",
  },
  {
    id: uuid(),
    label: "Client PGB",
    parentId: channelsId,
    icon: "HiOutlineBriefcase",
  },
  {
    id: uuid(),
    label: "Client ZVW",
    parentId: channelsId,
    icon: "HiOutlineCubeTransparent",
  },
  {
    id: uuid(),
    label: "Random",
    parentId: channelsId,
  },
  {
    id: uuid(),
    label: "Team drinks",
    parentId: channelsId,
    icon: "HiOutlineUsers",
  },
  {
    id: uuid(),
    label: "John Augustus",
    parentId: directMessagesId,
    icon: "HiOutlineUser",
  },
  {
    id: uuid(),
    label: "Amy Intosh",
    parentId: directMessagesId,
    icon: "HiOutlineUser",
  },
  {
    id: uuid(),
    label: "Danny Hertz",
    parentId: directMessagesId,
    icon: "HiOutlineUser",
  },
];

module.exports = {
  menuItems,
};
