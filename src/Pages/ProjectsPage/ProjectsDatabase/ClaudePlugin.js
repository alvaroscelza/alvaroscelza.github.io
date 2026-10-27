import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const claudePluginTechnologies =
    <ExperienceTechnologies>
        Claude Code, Shell, Hooks, Skills, AI tooling
        <br/>
        <br/>
        Early stage — the plugin structure and its contents are still being defined.
    </ExperienceTechnologies>

const claudePluginDescription =
    <VisualExperience>
        <ul className={classes.bulletList}>
            <li>
                I packed the Claude Code setup I was copying into every repo — slash commands, subagents, hooks, and settings — into one plugin, so I maintain it once and install it instead of pasting it.
            </li>
            <li>
                Claude Code does not auto-load a plugin-root <strong>CLAUDE.md</strong>. A <strong>SessionStart</strong> hook (<strong>hooks/hooks.json</strong> plus <strong>inject-claude-md.sh</strong>) reads that file and injects it as <strong>additionalContext</strong>. A project&apos;s own CLAUDE.md still loads on top.
            </li>
            <li>
                Multi-step procedures sit in skills so they load only when relevant. <strong>skills/requirements/</strong> manages <strong>REQUIREMENTS.md</strong>: create it from a template when it is missing, then list, add, refine, implement, or discard <strong>REQ-XXX</strong> items.
            </li>
            <li>
                The repo is its own marketplace (<strong>source: &quot;./&quot;</strong>), so there is no second marketplace repo. Install with <strong>/plugin marketplace add alvaroscelza/claude-plugin</strong> and <strong>/plugin install claude-plugin@claude-plugin</strong>. The contents are still being defined.
            </li>
        </ul>
    </VisualExperience>;

export {claudePluginTechnologies, claudePluginDescription};
