import React from 'react';

export function signInRequest(workerId) {
  return {
    type: '@worker/SIGN_IN_REQUEST',
    payload: { workerId },
  };
}

export function signInSuccess(workerId, workerData) {
  return {
    type: '@worker/SIGN_IN_SUCCESS',
    payload: { workerId, workerData },
  };
};

export function signFailure() {
  return {
    type: '@worker/SIGN_IN_FAILURE',
  }
}

export function signOut() {
  return {
    type: '@worker/SIGN_OUT',
  }
}

export function workerCheckIn(workerData) {
  return {
    type: '@worker/WORKER_DATA',
    payload: { workerData },
  };
}
