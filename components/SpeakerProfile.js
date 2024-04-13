import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProfileData from "./SpeakerProfileComponents/ProfileData";
import ProfileHeader from "./SpeakerProfileComponents/ProfileHeader";
import ProfileFooter from "./SpeakerProfileComponents/ProfileFooter";

export default function SpeakerProfile({ id }) {
  return (
    <>
      <ProfileHeader />
      <ProfileData />
      <ProfileFooter />
    </>
  );
}

const styles = StyleSheet.create({});
