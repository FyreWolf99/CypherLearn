function loadLesson()
{
    var input = document.createElement("input");
    input.type = "file";

    input.onchange = e => {
        var file = e.target.files[0];

        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        reader.onload = readerEvent => {
            var content = readerEvent.target.result;
            parseLesson(content);
        }
    }

    input.click()
}

function parseLesson(lessonText)
{
    var obj;
    try
    {
        obj = JSON.parse(lessonText);
        if (obj.format != 0.9)
        {
            alert("Unsupported Lesson Version!");
            return;
        }
    }
    catch (e)
    {
        alert("Lesson File is Corrupt or Invalid!");
        return;
    }

    var dissapearingShit = document.getElementById("disappearing-act"); // Get rid of Selection UI when in learn mode
    dissapearingShit.remove();

    var appearingShit = document.getElementById("sudden-appearance"); // Make Learn UI visible
    appearingShit.style = ""

    setupInitialLessonState(obj);
}

function createLesson()
{
    alert("This function is currently not implemented, but you can write a lesson based on any other example quite easily");
}

function setupInitialLessonState(obj)
{
    document.getElementById("lessonFormat").innerText = "Format: " + obj.format;
}