import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const texPath = path.join(__dirname, '../src/data/cv.tex');
const experiencePath = path.join(__dirname, '../src/data/experience.json');
const projectsPath = path.join(__dirname, '../src/data/projects.json');

try {
    const texContent = fs.readFileSync(texPath, 'utf8');

    // --- PARSE EXPERIENCE ---
    const experiences = [];
    const expRegex = /\\textbf\{([^}]+)\}\s*\\hfill\s*([^\\]+)\s*\\\\s*\s*([^\\]+)(?:\s*\\hfill\s*([^\n\\]+))?[\s\S]*?\\begin\{itemize\}([\s\S]*?)\\end\{itemize\}/g;

    // Note: The regex is adjusted to fit the format in cv.tex we just wrote
    // \textbf{Role} \hfill Dates \\ Company \hfill Location (Optional)

    let expMatch;
    let expSection = texContent.split('\\begin{rSection}{Experience}')[1].split('\\end{rSection}')[0];

    // Split by \textbf (Role) to handle multiple items more reliably than a global regex
    const expItems = expSection.split('\\textbf{').slice(1); // Skip everything before first item

    expItems.forEach((block, index) => {
        // Re-add the opening brace for regex to work easier or just manual parse
        const rolePart = block.split('}')[0];
        const role = rolePart;

        const rest = block.substring(role.length + 1);
        const dateMatch = rest.match(/\\hfill\s*([^\\]+)\s*\\\\/);
        const dates = dateMatch ? dateMatch[1].trim() : "Present";

        // After date/newline, comes Company
        const afterDate = rest.split('\\\\')[1];
        const companyLine = afterDate.split('\\begin{itemize}')[0].trim();
        // Check if company line has \hfill Location
        let company = companyLine;
        let location = 'Remote';
        if (companyLine.includes('\\hfill')) {
            [company, location] = companyLine.split('\\hfill').map(s => s.trim());
        }

        // Parse itemize
        const itemizeBlock = rest.split('\\begin{itemize}')[1]?.split('\\end{itemize}')[0] || "";
        const items = itemizeBlock
            .split('\\item')
            .map(i => i.trim().replace(/\\\\/g, '').replace(/\\textbf\{([^}]+)\}/g, '$1'))
            .filter(i => i.length > 0);

        experiences.push({
            id: index + 1,
            role: role,
            dates: dates,
            company: company,
            location: location,
            description: items
        });
    });

    fs.writeFileSync(experiencePath, JSON.stringify(experiences, null, 2));
    console.log(`Parsed ${experiences.length} experiences.`);

    // --- PARSE PROJECTS ---
    const projects = [];
    try {
        let projSection = texContent.split('\\begin{rSection}{Projects}')[1].split('\\end{rSection}')[0];
        const projItems = projSection.split('\\textbf{').slice(1);

        projItems.forEach((block, index) => {
            const titleEnd = block.indexOf('}');
            const title = block.substring(0, titleEnd);

            const rest = block.substring(titleEnd + 1);
            const techMatch = rest.match(/\\hfill\s*([^\n\\]+)/);
            const techStackString = techMatch ? techMatch[1].trim() : "";

            // Description is usually on the next line or after the tech stack
            const description = rest.split('\n').slice(1).join(' ').trim().replace(/\\\\/g, '');

            projects.push({
                id: index + 1,
                title: title,
                description: description,
                tags: techStackString.split(',').map(s => s.trim()),
                link: "#", // Placeholder
                type: "Project"
            });
        });

        fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));
        console.log(`Parsed ${projects.length} projects.`);
    } catch (e) {
        console.log("No projects section or error parsing projects:", e.message);
    }

} catch (err) {
    console.error('Error parsing CV:', err);
}
