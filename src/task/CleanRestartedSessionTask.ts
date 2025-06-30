// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import AudioVideoControllerState from '../audiovideocontroller/AudioVideoControllerState';
import BaseTask from './BaseTask';

export default class CleanRestartedSessionTask extends BaseTask {
  protected taskName = 'CleanRestartedSessionTask';

  constructor(private context: AudioVideoControllerState) {
    super(context.logger);
  }

  async run(): Promise<void> {
    if (this.context.peer) {
      this.context.peer.close();
    }
    this.context.transceiverController.reset();
    this.context.peer = null;
    this.context.videoDownlinkBandwidthPolicy.reset();
    this.context.iceCandidateHandler = null;
    this.context.iceCandidates = [];
    this.context.previousSdpOffer = null;
  }
}
