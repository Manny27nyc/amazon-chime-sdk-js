// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import TranscriptEntity from './TranscriptEntity';
import TranscriptItem from './TranscriptItem';

export default class TranscriptAlternative {
  items: TranscriptItem[];
  transcript: string;
  entities?: TranscriptEntity[];
}
