import axios from 'axios'
import setCSRF from './csrf-helper'

export const fetchTwoots = () => axios.get('/api/twoots')
