import { supabase, isSupabaseConfigured } from '../utils/supabaseClient';
import { projects as staticProjects } from '../data/projects';

export const projectService = {
  /**
   * Fetches all projects from Supabase. Falls back to static local data on failure or if not configured.
   */
  async getProjects() {
    if (!isSupabaseConfigured) {
      return staticProjects;
    }

    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects from Supabase:', error);
        return staticProjects;
      }

      if (!data || data.length === 0) {
        return staticProjects;
      }

      // Map Supabase project columns to the camelCase key names expected by components
      return data.map(project => ({
        id: String(project.id),
        title: project.title,
        category: project.category,
        year: project.year,
        client: project.client,
        role: project.role,
        githubUrl: project.github_url || null,
        liveUrl: project.live_url || null,
        thumbnail: project.thumbnail,
        content: project.content,
        // Backward compatibility for components calling project.getContent()
        getContent: async () => project.content
      }));
    } catch (err) {
      console.error('Failed to get projects from Supabase:', err);
      return staticProjects;
    }
  },

  /**
   * Fetches a single project by ID from Supabase. Falls back to static local data on failure.
   */
  async getProjectById(id) {
    if (!isSupabaseConfigured) {
      return staticProjects.find(p => String(p.id) === String(id)) || null;
    }

    try {
      // Query the project; handle potential UUID vs integer type mismatches gracefully
      const query = supabase.from('projects').select('*');
      
      // If id looks like a standard UUID, query as uuid; otherwise we check if it is numeric
      const { data, error } = await query.eq('id', id).maybeSingle();

      if (error) {
        console.error(`Error fetching project ${id} from Supabase:`, error);
        return staticProjects.find(p => String(p.id) === String(id)) || null;
      }

      if (!data) {
        // Fall back if not found in db
        return staticProjects.find(p => String(p.id) === String(id)) || null;
      }

      return {
        id: String(data.id),
        title: data.title,
        category: data.category,
        year: data.year,
        client: data.client,
        role: data.role,
        githubUrl: data.github_url || null,
        liveUrl: data.live_url || null,
        thumbnail: data.thumbnail,
        content: data.content,
        getContent: async () => data.content
      };
    } catch (err) {
      console.error(`Failed to get project ${id} from Supabase:`, err);
      return staticProjects.find(p => String(p.id) === String(id)) || null;
    }
  }
};
