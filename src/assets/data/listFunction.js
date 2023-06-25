import Icon from "react-native-vector-icons/Ionicons";
import palette from "../../constants/palette";
import { TouchableOpacity } from "react-native";

export const ListFunctions = [
  {
    id: "1",
    icon: (
      <TouchableOpacity
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white"
        style={{
          backgroundColor: "rgba(52, 115, 87,0.1) ",
        }}
      >
        <Icon
          name="notifications-outline"
          size={28}
          color={palette.main.main}
        />
      </TouchableOpacity>
    ),
    title: "Notification",
  },
  {
    id: "2",
    icon: (
      <TouchableOpacity
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white"
        style={{
          backgroundColor: "rgba(52, 115, 87,0.1) ",
        }}
      >
        <Icon name="call-outline" size={28} color={palette.main.main} />
      </TouchableOpacity>
    ),
    title: "Edit phone number",
  },
  {
    id: "3",
    icon: (
      <TouchableOpacity
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white"
        style={{
          backgroundColor: "rgba(52, 115, 87,0.1) ",
        }}
      >
        <Icon name="lock-open-outline" size={28} color={palette.main.main} />
      </TouchableOpacity>
    ),
    title: "Change password",
  },
  {
    id: "4",
    icon: (
      <TouchableOpacity
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white"
        style={{
          backgroundColor: "rgba(52, 115, 87,0.1) ",
        }}
      >
        <Icon name="build-outline" size={28} color={palette.main.main} />
      </TouchableOpacity>
    ),
    title: "Get help",
  },
  {
    id: "5",
    icon: (
      <TouchableOpacity
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white"
        style={{
          backgroundColor: "rgba(52, 115, 87,0.1) ",
        }}
      >
        <Icon name="log-out-outline" size={28} color={palette.main.main} />
      </TouchableOpacity>
    ),
    title: "Log out",
  },
];
