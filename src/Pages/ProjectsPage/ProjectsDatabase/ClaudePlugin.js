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
        <div className={classes.summarySection}>
            <p className={classes.summaryText}>
                A personal Claude Code plugin that packages slash commands, subagents, hooks, and settings into one installable plugin, so that setup is maintained once instead of copied into every project.
            </p>
        </div>

        <div className={classes.metricsGrid}>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Early</div>
                <div className={classes.metricLabel}>Stage</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Session</div>
                <div className={classes.metricLabel}>Start hook</div>
            </div>
            <div className={classes.metricCard}>
                <div className={classes.metricValue}>Skills</div>
                <div className={classes.metricLabel}>Load when relevant</div>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🔌</span>
                <span>One installable plugin</span>
            </div>
            <p className={classes.contributionDescription}>
                Centralizes the configuration that otherwise gets re-added by hand: custom commands, agents, hooks, and permission settings. The repo is also its own marketplace (<code>source: "./"</code>), so no separate marketplace repo is required.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Claude Code</span>
                <span className={classes.techTag}>Shell</span>
                <span className={classes.techTag}>AI tooling</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>🪝</span>
                <span>SessionStart hook</span>
            </div>
            <p className={classes.contributionDescription}>
                A plugin-root <code>CLAUDE.md</code> is not auto-loaded by Claude Code. A SessionStart hook reads that file and injects it as <code>additionalContext</code> at the start of every session. A project's own <code>CLAUDE.md</code> still loads on top of this base.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Hooks</span>
                <span className={classes.techTag}>CLAUDE.md</span>
                <span className={classes.techTag}>Shell</span>
            </div>
        </div>

        <div className={classes.contributionCard}>
            <div className={classes.contributionTitle}>
                <span className={classes.contributionIcon}>📋</span>
                <span>Skills load only when relevant</span>
            </div>
            <p className={classes.contributionDescription}>
                Multi-step procedures live in skills instead of <code>CLAUDE.md</code>, so they load only when relevant. <code>skills/requirements/</code> manages a project's <code>REQUIREMENTS.md</code>: create it from a template when missing, and list, add, refine, implement, or discard requirements.
            </p>
            <div className={classes.techStack}>
                <span className={classes.techTag}>Skills</span>
                <span className={classes.techTag}>Claude Code</span>
            </div>
        </div>
    </VisualExperience>;

export {claudePluginTechnologies, claudePluginDescription};
