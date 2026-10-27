import ExperienceTechnologies from "../../ExperiencePage/ExperiencePageComponents/ExperienceTechnologies";
import VisualExperience from "../../ExperiencePage/ExperiencePageComponents/VisualExperience";
import classes from "../../ExperiencePage/ExperiencePageComponents/VisualExperience.module.css";

const finAppTechnologies =
    <ExperienceTechnologies>
        JavaScript, React, Supabase, Vercel
        <br/>
        <br/>
        Worked on for years. Fully rebuilt in late 2025.
    </ExperienceTechnologies>

const finAppDescription =
    <VisualExperience>
        <ul className={classes.bulletList}>
            <li>
                Personal finance and investments. I worked on it for years and fully rebuilt it in late 2025 as a <strong>React</strong> app on <strong>Vercel</strong>, with data and auth in <strong>Supabase</strong>.
            </li>
            <li>
                Sign-in is Google only, via <strong>supabase.auth.signInWithOAuth</strong>. Screens cover the dashboard, transactions, accounts, concepts, investments, financial strategy, and profile.
            </li>
            <li>
                Transactions go through Supabase functions (<strong>create_transaction</strong>, <strong>list_transactions</strong>, <strong>update_transaction</strong>, <strong>delete_transaction</strong>). Recurring charges use <strong>create_transaction_installments</strong>. I also import a card statement from CSV.
            </li>
            <li>
                Investments live in the <strong>investments</strong> and <strong>investment_entries</strong> tables. Monthly concept balances can be stored as projections or manual entries. Balances and the strategy view come from SQL functions (<strong>get_investments_balance</strong>, <strong>get_financial_strategy_data</strong>).
            </li>
        </ul>
    </VisualExperience>;

export {finAppTechnologies, finAppDescription};
