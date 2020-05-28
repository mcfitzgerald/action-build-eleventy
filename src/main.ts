import * as core from '@actions/core'
import {build} from './build'

async function run(): Promise<void> {
  try {
    await build()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
