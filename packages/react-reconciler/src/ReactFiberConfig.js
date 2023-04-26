/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-disable react-internal/prod-error-codes */

// We expect that our Rollup, Jest, and Flow configurations
// always shim this module with the corresponding host config
// (either provided by a renderer, or a generic shim for npm).
//
// We should never resolve to this file, but it exists to make
// sure that if we *do* accidentally break the configuration,
// the failure isn't silent.

// step7
// 这个文件是会在编译的时候被替换成对应的 host config
// throw new Error('This module must be shimmed by a specific renderer.');
// export * from 'react-dom-bindings/src/client/ReactFiberConfigDOM';
// export * from "./forks/ReactFiberHostConfig.dom-browser";
export * from 'react-dom-bindings/src/client/ReactFiberConfigDOM';