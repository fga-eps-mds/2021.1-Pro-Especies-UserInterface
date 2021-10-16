import argparse
import logging
import re

def update_version(version : str, file : str):
  openedFile = open(file, "r")
  fileContent = openedFile.read()
  regex = r'^(\s*\"version\": )(\"[\d.]*\"),$'
  newFileContent = ''
  print(fileContent.splitlines()
  )
  for f in fileContent.splitlines():
    match = re.fullmatch(regex, f)
    if match != None:
      newFileContent += match.group(1) + f'"{version}",'
    else:
      newFileContent += f
    newFileContent += '\n'
  openedFile.close()
  openedFile = open(file, "w")
  openedFile.write(newFileContent)
  openedFile.close()

def build_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(nargs=2,
                        action='store',
                        dest='update_version',
                        help='Apply regex to replace the current version of app.json expo pattern file'
                        )
    return parser.parse_args()


if __name__ == '__main__':
    args = build_args()
    if args.update_version:
        print("entrou")
        update_version(args.update_version[0], args.update_version[1])
        print("saiu")