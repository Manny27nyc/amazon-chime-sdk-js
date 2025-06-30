// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export default class GlobalMetricReport {
  previousMetrics: { [id: string]: number } = {};
  currentMetrics: { [id: string]: number } = {};
}
