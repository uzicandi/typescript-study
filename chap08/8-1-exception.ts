// Java : Exception
// JavaScript : Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!💩') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents📂';
}

function closeFile(fileName: string) {}

function run() {
  const fileName = 'not exist!💩';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`error catched!!`);
    return; // return을 해도 finally에 있는것이 실행됨.
  } finally {
    closeFile(fileName);
    console.log(`closed!!`);
  }
}

run();
