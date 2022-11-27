import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

const defaultImage = require("@assets/default-image.png");
const vacantOverlay = require("@assets/vacant-overlay.png");
const occupiedOverlay = require("@assets/occupied-overlay.png");
const needsCleaningOverlay = require("@assets/needs-cleaning-overlay.png");
const needsServiceOverlay = require("@assets/needs-service-overlay.png");

type Overlay = "vacant" | "occupied" | "needs-cleaning" | "needs-service";

interface GuestAvatarProps {
  overlay: Overlay;
  source?: ImageSourcePropType;
}

function getOverlayImage(overlay: Overlay) {
  switch (overlay) {
    case "occupied":
      return occupiedOverlay;
    case "needs-cleaning":
      return needsCleaningOverlay;
    case "needs-service":
      return needsServiceOverlay;
    default:
      return vacantOverlay;
  }
}

export const GuestAvatar = ({ source, overlay }: GuestAvatarProps) => {
  const [ avatarLayout, setAvatarLayout ] = React.useState({ left: 0, top: 0, width: 0, height: 0 });

  return <View style={styles.container}>
    <Avatar.Image
      source={source || defaultImage}
      onLayout={({nativeEvent: { layout: {x: left, y: top, width, height}}}) => {
        setAvatarLayout({ left, top, width, height });
      }} />
    <Image style={[styles.image, avatarLayout]} source={getOverlayImage(overlay)} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    position: "absolute",
  }
});