// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

type EventName =
  | 'meetingStartRequested'
  | 'meetingStartSucceeded'
  | 'meetingReconnected'
  | 'meetingStartFailed'
  | 'meetingEnded'
  | 'meetingFailed'
  | 'attendeePresenceReceived'
  | 'audioInputSelected'
  | 'audioInputUnselected'
  | 'audioInputFailed'
  | 'videoInputSelected'
  | 'videoInputUnselected'
  | 'videoInputFailed'
  | 'signalingDropped'
  | 'receivingAudioDropped';

export default EventName;
