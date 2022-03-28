// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import AttendeeCapabilityType from './AttendeeCapabilityType';
/**
 * [[AttendeeCapabilities]] contains the information of an attendee's capabilities.
 */
export default class AttendeeCapabilities {

  attendeeAudioCapability: AttendeeCapabilityType;

  attendeeVideoCapability: AttendeeCapabilityType;

  attendeeContentCapability: AttendeeCapabilityType;
}
