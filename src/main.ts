// import * as core from '@actions/core'
// import {build} from './build'

import * as core from '@actions/core'
import * as exec from '@actions/exec'

export async function build(): Promise<void> {
  const path = core.getInput('path', {required: true})
  try {
    await exec.exec(`npx @11ty/eleventy ${path}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}
// async function run(): Promise<void> {
//   try {
//     await build()
//   } catch (error) {
//     core.setFailed(error.message)
//   }
// }

// run()

build()
