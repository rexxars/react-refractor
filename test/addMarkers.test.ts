import type {RefractorRoot} from 'refractor'
import {expect, test} from 'vitest'
import {addMarkers} from '../src/addMarkers'
import {astFixtures} from './fixtures/ast'

test('adds correct line numbers', () => {
  const markers = [9, 11, 10, 12, 13, 14, 15, 16, 17, 18, 1]
  const root: RefractorRoot = {type: 'root', children: astFixtures}

  expect(addMarkers(root, {markers})).toMatchSnapshot()
})

test('does not crash on markers beyond the number of lines in source', () => {
  const markers = [9, 11, 10, 12, 13, 100, 14, 15, 16, 17, 18, 1]
  const root: RefractorRoot = {type: 'root', children: astFixtures}

  expect(addMarkers(root, {markers})).toMatchSnapshot()
})
